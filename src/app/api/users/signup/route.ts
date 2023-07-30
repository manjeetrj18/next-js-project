import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    let { confirmPassword } = reqBody;
    console.log(reqBody);

    // Check if User already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(12);
    const hasedPassword = await bcryptjs.hash(password, salt);
    confirmPassword = hasedPassword;

    const signupNewUser = await new User({
      username,
      email,
      password: hasedPassword,
      confirmPassword,
    }).save();

    console.log(signupNewUser);

    return NextResponse.json({
      message: "Signup successfully.",
      success: true,
      signupNewUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
