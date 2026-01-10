import { useEffect } from "react";
import Header from "@/components/Header";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <main className="pt-24">
        <BlurFade inView>
          <RegistrationForm />
        </BlurFade>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
