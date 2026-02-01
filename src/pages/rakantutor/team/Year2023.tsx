import MeetTheTeamTemplate from "./Template";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import BlurFade from "@/components/ui/blur-fade";

interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

const teamMembers: TeamMember[] = [
    { name: "Kai Song", role: "Co-Founder", image: "/meet-the-team-2023-2024/Kai-Song.png" },
    { name: "Kaveen", role: "Co-Founder", image: "/meet-the-team-2023-2024/Kaveen.png" },
    { name: "Hui Ern Tan", role: "Managing Director", image: "/meet-the-team-2023-2024/Hui-Ern-Tan.jpeg" },
    { name: "Wei Chen Yow", role: "Program Director", image: "/meet-the-team-2023-2024/Wei-Chen-Yow.jpeg" },
    { name: "Loke An Gie", role: "Program Director", image: "/meet-the-team-2023-2024/Loke-An-Gie.jpeg" },
    { name: "Clarissa Ch’ng Si-En", role: "Master Marketing Wizard", image: "/meet-the-team-2023-2024/Clarissa-Ch_ng-Si-En.jpeg" },
    { name: "Anushkha Ananthan", role: "Student Welfare Director", image: "/meet-the-team-2023-2024/Anushkha-Ananthan.jpeg" },
    { name: "Samantha Yap Yi Hui", role: "Operations Director", image: "/meet-the-team-2023-2024/Samantha-Yap-Yi-Hui.jpeg" },
    { name: "Nur Shahirah Huda Khairuddin", role: "Program Associate", image: "/meet-the-team-2023-2024/Nur-Shahirah-Huda.jpeg" },
    { name: "Poorni Villai Samy", role: "Program Associate", image: "/meet-the-team-2023-2024/Poorni-Villai-Samy.jpeg" },
    { name: "Young Hui Meng", role: "Program Associate", image: "/meet-the-team-2023-2024/Young-Hui-Meng.jpeg" },
    { name: "Kishorr Kumar A/L Mathivanan", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/KishorrKumar.jpeg" },
    { name: "Youyou Ho", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/youyouh.jpeg" },
    { name: "Nurul Anisa Najiha binti Mispan", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/Nurul_Anisa_Najiha.jpeg" },
    { name: "Fadhrullah Hakim Yusop", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/Fadhrullah-Hakim.jpeg" },
    { name: "Bharathwaj Kumaravel", role: "Marketing Associate", image: "/meet-the-team-2023-2024/Bharathwaj-Kumaravel.jpeg" },
    { name: "Lim Xin Yan", role: "Marketing Associate", image: "/meet-the-team-2023-2024/Lim-Xin-Yan.jpeg" },
    { name: "Iman Chin Binti Sulayman Chin", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/Iman-Chin-Binti-Sulayman-Chin.jpeg" },
    { name: "Jay Yen Lim", role: "Tech & Finance Lead", image: "/meet-the-team-2023-2024/Jay.jpeg" },
    { name: "Ashlyn Ng", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/Ashlyn-Ng.jpeg" },
    { name: "Nursyafiqah binti Kasmazuli", role: "Student Welfare Associate", image: "/meet-the-team-2023-2024/Syafiqah-Kas.jpeg" },
    { name: "Wan Iqbal bin W Rawi", role: "Operations Associate", image: "/meet-the-team-2023-2024/Wan_Iqbal.jpeg" },
    { name: "Tan Jia Ren", role: "Operations Associate", image: "/meet-the-team-2023-2024/Tan-Jia-Ren.jpeg" },
    { name: "Nur Iman Tan Binti Muhamad Daniel Tan", role: "Finance Associate", image: "/meet-the-team-2023-2024/Nur-Iman-Tan.jpeg" },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
    <Card className="overflow-hidden border-none bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group h-full">
        <CardContent className="p-0">
            <AspectRatio ratio={4 / 5} className="bg-muted overflow-hidden relative">
                {member.image ? (
                    <img src={member.image} alt={member.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-secondary/30 text-secondary-foreground">
                        <span className="text-4xl font-light tracking-widest text-primary/40">
                            {member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-2">
                        {member.role}
                    </p>
                </div>
            </AspectRatio>
            <div className="p-4 text-center">
                <h3 className="font-semibold text-lg line-clamp-1" title={member.name}>{member.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1" title={member.role}>{member.role}</p>
            </div>
        </CardContent>
    </Card>
);

const MeetTheTeam2023 = () => {
    return (
        <MeetTheTeamTemplate title="Meet the Team (2023-2024)">
            <div className="py-12 px-4 md:px-8">
                <div className="container mx-auto text-center mb-16">
                    <BlurFade>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
                            Students and professionals driving education impact
                        </p>
                    </BlurFade>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
                        {teamMembers.map((member, idx) => (
                            <BlurFade key={member.name} delay={0.05 * idx} inView>
                                <MemberCard member={member} />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </div>
        </MeetTheTeamTemplate>
    );
};

export default MeetTheTeam2023;
