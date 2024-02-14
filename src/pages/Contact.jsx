import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Wolf from "../models/Wolf";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('DireWolf_Idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation('DireWolf_Howl')
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Daniel",
          to_email: "dev89dan@gmail.com",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisLoading(false);
        setTimeout(()=> {
          setCurrentAnimation('DireWolf_Idle')
          setForm({ name: "", email: "", message: "" });
        }, [3000])
      })
      .catch((error) => {
        setisLoading(false);
        setCurrentAnimation('DireWolf_Idle')
        console.log(error);
      });
  };
  const handleFocus = () => setCurrentAnimation('DireWolf_Walk');
  const handleBlur = () => setCurrentAnimation('DireWolf_Idle');

  return (
    <section className="relative flex lg:flex-row flex-col max-container lg:h-[100vh] ">
      <div className="flex-1 min-w-[60%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        
        <form
          className="w-full flex flex-col gap-7 mt-14"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your message
            <textarea
              name="message"
              rows={4}
              className="input"
              placeholder="Interested in collaborating? Let's talk..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] bg-neutral-100">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[ 0, 0, 1 ]}/>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Wolf
              currentAnimation={currentAnimation}
              position={[0, -1.1, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[2.5, 2.5, 2.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;