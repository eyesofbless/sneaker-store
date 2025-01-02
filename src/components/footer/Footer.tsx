import SupabaseLogo from "@/components/footer/supabase-logo";
import NextLogo from "@/components/footer/next-logo";

const Footer = () => {
    return (
        <footer className="flex mt-auto flex-col items-center justify-center text-white bg-[#242424] p-[25px]">
            <span className="text-[12px]">Powered by</span>
            <div className="flex items-center gap-5">
                <SupabaseLogo />
                <span className="border-l rotate-45 h-6"/>
                <NextLogo />
            </div>
        </footer>
    )
}
export default Footer