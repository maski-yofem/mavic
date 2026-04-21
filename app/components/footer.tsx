'use client';
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    const handleShare = async () => {
        if (navigator.share) {
            try {
            await navigator.share({
                title: "Ma'avic Brand",
                url: window.location.href,
            });
            } catch (err) {
            console.error("Erro ao compartilhar:", err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copiado para a área de transferência!");
        }
    };

    return (
        <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <h3 className="text-primary font-serif text-lg tracking-widest uppercase">
                            {"Ma'avic"} Brand {" "}
                            <span className="text-[16px] text-muted tracking-widest uppercase">
                                © {currentYear} {"Ma'avic"} Brand. Todos os direitos reservados.
                            </span>
                        </h3>
                    </div>

                    <div className="flex gap-8">
                        <button 
                            onClick={handleShare}
                            className="text-white/60 transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer"
                            title="Compartilhar Link"
                        >
                            <Image
                                src="/assets/share-icon.svg"
                                alt="Ícone de compartilhamento"
                                width={20}
                                height={20}
                            />
                        </button>
                        <a 
                            href="mailto:oliveiracouros2019@gmail.com" 
                            className="text-white/60 transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer"
                            title="Escrever email"
                            >
                            <Image
                                src="/assets/email-icon.svg"
                                alt="Ícone de email"
                                width={24}
                                height={20}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};