import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { TokenCookie} from "@/app/utility/TokenCookie";



export  async function POST(req, res) {
  const JsonBody = await req.json()
  let email=JsonBody['email'];
  let password=JsonBody['password'];

  //transporter

  let Transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  //Create mail

  let mailOptions = {
    from: "Abu Hasan <info@teamrabbil.com>",
    to: email,
    subject: "Test Purpose",
    text: "jsdjfsdfjsdjfjfds ",
  };

  try {
    let result = await Transporter.sendMail(mailOptions);
    
    let Cookie =await TokenCookie(email);
        return NextResponse.json(
            {status:true,message:"Request completed"},
            {status: 200, headers:Cookie}
        )
    
  } 
  catch {
    return NextResponse.json({ msg: "Error asche bro" });
  }
}
export async function GET(req,res) {
  cookies().delete('token')
  return NextResponse.json(
      {status:true,message:"Request Completed"}
  )
}