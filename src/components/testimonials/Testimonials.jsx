import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Manjiree Naik",
      position: "Patient",
      message:
        "Excellent treatment by Dr.Atharv.I got relief within a week for shoulder pain. Dr. Atharva gives personal attention to each patient.Thnx 🙏🙏Best wishes for ur bright future 🌹🌹",
      image:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
    {
      id: 2,
      name: "Charudutt Shukla",
      position: "Patient's Son",
      message:
        "My father is 87 years old and was having acute knee pain,Dr.Mairals physiotherapy has minimised his knee pain, presently Dr.Mairal is working on improving his walking.",
      image:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
    {
      id: 3,
      name: "Priya Gandole",
      position: "Patient",
      message:
        "Dr Atharva personally attend every patient daily and which is best physiotherapy center khamla in Nagar l am extremely happy to recommend this doctor for physiotherapy he is excellent in his work",
      image:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
    {
      id: 4,
      name: "Rajesh R",
      position: "Patient",
      message:
        "Dr. Atharva and his colleague are very knowledgeable as well humble in their approach towards the patients . I went there with moderate CTS in both my hands and within about a week or so got 90 percent relief, after which I continued the exercises at home. Now I am fine. Highly recommended for any Physiotherapy/Occupational therapy treatment.",
      image:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    },
    {
      id: 5,
      name: "Sudhir Deshpande",
      position: "Patient",
      message:
        "I have taken physio treatment for one month.That time i was in terrible pain.earlier improvement was slow. but i must say that Dr Atharva is soft spoken.and he is very good at his job.i have improved a lot.thanks for his efferts. Urmila Deshpande.",
      image:
        "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    }
  ];
  return (
    <section className="testimonials">
      <h2>What our Patients say about us!</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
