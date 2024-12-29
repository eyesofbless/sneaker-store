import SupabaseLogo from "@/components/footer/supabase-logo";
import NextLogo from "@/components/footer/next-logo";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center text-white bg-[#242424] p-[50px]">
            <span className="text-[12px] pt-4">Powered by</span>
            <div className="flex items-center gap-5">
                <SupabaseLogo />
                <span className="border-l rotate-45 h-6"/>
                <NextLogo />
            </div>
        </footer>
    )
}
export default Footer