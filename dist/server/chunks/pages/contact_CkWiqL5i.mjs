import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_rT9NWpDx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Flgridsection, a as $$Simpledescription } from './ayuntamiento_bV26DzQ5.mjs';
import { a as $$Layout } from './404_yR3XJ1zS.mjs';
import 'clsx';
import nodemailer from 'nodemailer';
/* empty css                            */

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "matemaki33@gmail.com",
    pass: "opzx tiqi zofe mtsa"
  },
  from: `"Nombre Genérico" <noreply@example.com>`
});
async function sendMailAsync(senderEmail, name, message) {
  try {
    console.log("hola");
    const info = await transporter.sendMail({
      from: `"${name} 👻 " <${senderEmail}>`,
      to: "matemaki33@gmail.com",
      subject: "Contacto desde Huesa 💯",
      text: `"${message}`,
      html: `"<b>${message}</b>"`
    });
  } catch (error) {
    alert(error);
  }
}

const $$Astro$1 = createAstro("https://MateMaki33.github.io");
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contactform;
  const errors = { username: "", email: "", message: "", policy: "" };
  if (Astro2.request.method === "POST") {
    try {
      console.log("request");
      const data = await Astro2.request.formData();
      const name = data.get("username");
      const email = data.get("email");
      const message = data.get("message");
      const policy = data.get("policy");
      if (!policy) {
        errors.policy += "Please accept the privacy policy. ";
      }
      if (typeof name !== "string" || name.length < 1) {
        errors.username += "Please enter a username.";
      }
      if (typeof message !== "string" || message.length < 1) {
        errors.message += "Please enter a message.";
      }
      if (typeof email !== "string" || !isValidEmail(email)) {
        errors.email += "Email is not valid.";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        await sendMailAsync(email, name, message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section class="form-wrapper" data-astro-cid-uwnxe3i2> <h1 data-astro-cid-uwnxe3i2>Contacto</h1> <form method="POST" data-astro-cid-uwnxe3i2> <label for="username" data-astro-cid-uwnxe3i2>Nombre</label> <input type="text" name="username" id="username" required data-astro-cid-uwnxe3i2> ${errors.username && renderTemplate`<p data-astro-cid-uwnxe3i2>${errors.username}</p>`} <label for="email" data-astro-cid-uwnxe3i2>Email</label> <input type="email" name="email" id="email" required data-astro-cid-uwnxe3i2> ${errors.email && renderTemplate`<p data-astro-cid-uwnxe3i2>${errors.email}</p>`} <label for="message" data-astro-cid-uwnxe3i2>Mensaje </label> <textarea name="message" id="message" required data-astro-cid-uwnxe3i2></textarea> ${errors.message && renderTemplate`<p data-astro-cid-uwnxe3i2>${errors.message}</p>`} <div class="policy-validate" data-astro-cid-uwnxe3i2> <input type="checkbox" name="policy" required data-astro-cid-uwnxe3i2> <label for="policy" data-astro-cid-uwnxe3i2>He leído y acepto la <a href="#" data-astro-cid-uwnxe3i2>política de privacidad</a> del sitio</label> </div> ${errors.policy && renderTemplate`<p data-astro-cid-uwnxe3i2>${errors.policy}</p>`} <button data-astro-cid-uwnxe3i2>Enviar</button> </form> </section> `;
}, "C:/Users/matem/Desktop/Huesa/src/components/contactform.astro", void 0);

const $$Astro = createAstro("https://MateMaki33.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "NormalSection", $$Flgridsection, { "className": "section-flex-column", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Simpledescription", $$Simpledescription, { "title": "Ayuntamiento de Huesa", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result4) => renderTemplate` <ul id="social-services" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl>Dirección: Plaza de la Constitución,11</li> <li data-astro-cid-uw5kdbxl>Teléfono: 953 715 009 - Fax: 953715 672</li> <li data-astro-cid-uw5kdbxl>Email: ayuntamiento@huesa.es</li> <li data-astro-cid-uw5kdbxl>Abierto de 8:00h a 15:00h</li> </ul> ` })} ` })} </section> ${renderComponent($$result2, "Contactform", $$Contactform, { "data-astro-cid-uw5kdbxl": true })} ` })} `;
}, "C:/Users/matem/Desktop/Huesa/src/pages/contact.astro", void 0);

const $$file = "C:/Users/matem/Desktop/Huesa/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
