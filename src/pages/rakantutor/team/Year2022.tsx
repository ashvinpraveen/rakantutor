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
    { name: "Kai Song", role: "Co-Founder", image: "/meet-the-team-2022-2023/Screenshot-2025-07-17-230036.png" },
    { name: "Kaveen", role: "Co-Founder", image: "/meet-the-team-2022-2023/Screenshot-2025-07-17-230231.png" },
    { name: "Tzy Hwan Hiew", role: "Managing Director", image: "/meet-the-team-2022-2023/Tzy-Hwan-Hiew-225x300-1.jpeg" },
    { name: "Shannen Low", role: "Managing Director", image: "/meet-the-team-2022-2023/Shannen-Low-300x300-1.jpeg" },
    { name: "Wen Wen Teh", role: "Program Director", image: "/meet-the-team-2022-2023/Wen-Wen-300x300-1.jpg.jpeg" },
    { name: "Anis Sufea", role: "Program Director", image: "/meet-the-team-2022-2023/Anis-300x300-1.jpeg" },
    { name: "Samantha Lee", role: "Master Marketing Wizard", image: "/meet-the-team-2022-2023/Sam-Lee-300x298-1.jpg.jpeg" },
    { name: "Shu Fen Chong", role: "Student Welfare Director", image: "/meet-the-team-2022-2023/Shu-Fen-Chong-300x300-1.jpg.jpeg" },
    { name: "Nur Shahirah Huda Khairuddin", role: "Program Associate" },
    { name: "Katharine Tay Xin Yi", role: "Student Welfare Director", image: "/meet-the-team-2022-2023/Katharine-Tay-225x300-1.jpg.jpeg" },
    { name: "Ramanath Tamelarasan", role: "Operations Director", image: "/meet-the-team-2022-2023/Ramanath-Tamelarasan-300x300-1.jpeg" },
    { name: "Samantha Choo", role: "Operations Director", image: "/meet-the-team-2022-2023/Samantha-Choo-300x300-1.jpeg" },
    { name: "Nurul Qarirah", role: "Partnership Lead", image: "/meet-the-team-2022-2023/Nurul-Qarirah-300x300-1.jpg.jpeg" },
    { name: "Rachel Lee", role: "Partnership Lead", image: "/meet-the-team-2022-2023/rachel-Lee-300x300-1.jpg.jpeg" },
    { name: "Wai Kin Leo", role: "Partnership Lead", image: "/meet-the-team-2022-2023/Leo-Wai-Kin-300x300-1.jpeg" },
    { name: "Jie Yi Ng", role: "Secretary", image: "/meet-the-team-2022-2023/Jie-Yi-300x298-1.jpg.jpeg" },
    { name: "Jay Yen Lim", role: "Tech & Finance Lead", image: "/meet-the-team-2022-2023/Jay-251x300-1.jpg.jpeg" },
    { name: "Ooi Sze Hui", role: "Program Associate", image: "/meet-the-team-2022-2023/Ooi_Sze_Hui-300x300-1.jpg.jpeg" },
    { name: "Xiao Binn Neoh", role: "Program Associate", image: "/meet-the-team-2022-2023/Xiao-Binn-Neoh-235x300-1.jpg.jpeg" },
    { name: "Yuen Seng Lai", role: "Program Associate", image: "/meet-the-team-2022-2023/Lai-Yuen-Seng-298x300-1.jpg.jpeg" },
    { name: "Jun Qi Liew", role: "Program Associate", image: "/meet-the-team-2022-2023/Jun-Qi-Liew-300x300-1.jpeg" },
    { name: "Song Yu Ho", role: "Student Welfare Associate", image: "/meet-the-team-2022-2023/Song-Yu-247x300-1.jpg.jpeg" },
    { name: "Lingeswary Manickam", role: "Student Welfare Associate", image: "/meet-the-team-2022-2023/lingeswary-manickam-298x300-1.jpg.jpeg" },
    { name: "Crisphine", role: "Student Welfare Associate", image: "/meet-the-team-2022-2023/Crisphine-Lyana-Dunstan-267x300-1.png" },
    { name: "Muhammad Alif Iman", role: "Marketing Associate", image: "/meet-the-team-2022-2023/Muhammad-Alif-Iman-Asmal-296x300-1.jpg.jpeg" },
    { name: "Nara Ruslan", role: "Operations Associate", image: "/meet-the-team-2022-2023/nara-bara-224x300-1.jpg.jpeg" },
    { name: "Hui Ern Tan", role: "Operations Associate", image: "/meet-the-team-2022-2023/Hui-Ern-Tan-300x300-1.jpg.jpeg" },
    { name: "Samantha Heng", role: "Operations Associate", image: "/meet-the-team-2022-2023/Samantha_Heng-300x300-1.jpg.jpeg" },
    { name: "Bryan Ng", role: "Operations Associate", image: "/meet-the-team-2022-2023/Bryan-Ng-275x300-1.jpeg" },
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

const MeetTheTeam2022 = () => {
    return (
        <MeetTheTeamTemplate title="Meet the Team (2022-2023)">
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

export default MeetTheTeam2022;
