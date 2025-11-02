import { useRef } from "react";
import emailjs from "emailjs-com";

export default function FaleComigo() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "seu_service_id",
        "seu_template_id",
        form.current,
        "sua_public_key"
      )
      .then(
        (result) => {
          alert("Email enviado com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar: " + error.text);
        }
      );
  };

  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6"
    >
      <h2 className="text-3xl font-bold mb-6">Fale Comigo</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Seu nome"
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Seu e-mail"
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Sua mensagem..."
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
