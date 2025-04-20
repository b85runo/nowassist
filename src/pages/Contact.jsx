export default function Contact() {
    return (
      <main>
        <h2>Kontakt</h2>
        <form>
          <input type="text" placeholder="Ditt namn" /><br />
          <input type="email" placeholder="Din e-post" /><br />
          <textarea placeholder="Meddelande"></textarea><br />
          <button type="submit">Skicka</button>
        </form>
      </main>
    )
  }