export default async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let toEmail = searchParams.get("email");

  //transporter

  let Transporter = nodemailer.createTransporter({
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
    to: toEmail,
    subject: "Test Purpose",
    text: "jsdjfsdfjsdjfjfds ",
  };

  try {
    let result = await Transporter.sendMail(mailOptions);
    return NextResponse.json({ msg: result });
  } 
  catch {
    return NextResponse.json({ msg: "Error asche bro" });
  }
}
