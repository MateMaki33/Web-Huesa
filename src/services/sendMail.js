import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: import.meta.env.MAIL_HOST,
    port: import.meta.env.MAIL_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: import.meta.env.MAIL_USER,
      pass: import.meta.env.MAIL_PWD,
    }
  });


  async function sendMailAsync(senderEmail, name, message) {
    try {
      console.log("hola");
      const info = await transporter.sendMail({
      from: `"Web Ayuntamiento"  <${senderEmail}>`, 
      to: import.meta.env.MAIL_USER, 
      subject: "Contacto desde Huesa", 
      text: `${message}`,
      html: `<b>Mensaje enviado por</b> ${name}<br/> <b>Correo de contacto:</b> ${senderEmail}<br/><br/>${message}`, 
    });
    } catch (error) {
      alert(error);
    }
    
  
  }

  export default sendMailAsync;
  