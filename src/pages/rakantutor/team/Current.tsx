import MeetTheTeamTemplate from "./Template";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import BlurFade from "@/components/ui/blur-fade";

interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

const founders: TeamMember[] = [
    { name: "Kai Song", role: "Co-Founder", image: "/meet-the-team-2025-2026/Kai-Song.png" },
    { name: "Kaveen", role: "Co-Founder", image: "/meet-the-team-2025-2026/Kaveen.png" },
];

const directors: TeamMember[] = [
    { name: "Ee Vi", role: "Impact Director", image: "/meet-the-team-2025-2026/Ee-Vi.png" },
    { name: "Angie", role: "Marketing Co-Director", image: "/meet-the-team-2025-2026/Angie.png" },
    { name: "Hong Zhe", role: "Marketing Co-Director", image: "/meet-the-team-2025-2026/Hong Zhe.png" },
    { name: "Ben", role: "Outreach Director", image: "/meet-the-team-2025-2026/Ben.png" },
    { name: "Hong Liang", role: "Tech Director", image: "/meet-the-team-2025-2026/Hong-Liang.png" },
    { name: "Jacklyn", role: "Content Director", image: "/meet-the-team-2025-2026/Jacklyn.png" },
    { name: "Emily", role: "Product Director", image: "/meet-the-team-2025-2026/Emily.png" },
    { name: "Jay Yen Lim", role: "Finance Director", image: "/meet-the-team-2025-2026/Jay-Yen-Lim.jpeg" },
    { name: "Jie Yi Ng", role: "Secretary", image: "/meet-the-team-2025-2026/Jie-Yi.jpeg" },
];

const associates: Record<string, TeamMember[]> = {
    "Strategic Projects": [
        { name: "Xu Qian", role: "Strategic Project Associate", image: "/meet-the-team-2025-2026/Xu-Qian.png" }
    ],
    "Impact": [
        { name: "Afifah", role: "Impact Associate", image: "/meet-the-team-2025-2026/Afifah.png" },
        { name: "Aizat Lee", role: "Impact Associate", image: "/meet-the-team-2025-2026/Aizat-Lee.jpg.jpeg" },
        { name: "Hsien Wen", role: "Impact Associate", image: "/meet-the-team-2025-2026/Hsien-wen.png" },
        { name: "Ven Vai", role: "Impact Associate", image: "/meet-the-team-2025-2026/Ven-Vai.png" },
        { name: "Yi Ran", role: "Impact Associate", image: "/meet-the-team-2025-2026/Yi-Ran.png" },
        { name: "Ze Pin", role: "Impact Associate", image: "/meet-the-team-2025-2026/Ze-Pin.png" },
    ],
    "Marketing": [
        { name: "Adlina", role: "Marketing Associate", image: "/meet-the-team-2025-2026/Adlina.png" },
        { name: "Alyssa Hum", role: "Marketing Associate", image: "/meet-the-team-2025-2026/Alyssa-Hum.jpeg" },
        { name: "Hasviniy Ganasan", role: "Marketing Associate", image: "/meet-the-team-2025-2026/Hasviniy-Ganasan.jpeg" },
        { name: "Lynly", role: "Marketing Associate", image: "/meet-the-team-2025-2026/Lynly.png" },
        { name: "Vincent", role: "Marketing Associate", image: "/meet-the-team-2025-2026/Vincent.png" },
    ],
    "Outreach": [
        { name: "Amirul", role: "Outreach Associate", image: "/meet-the-team-2025-2026/Amirul.png" },
        { name: "Helena Chan", role: "Outreach Associate", image: "/meet-the-team-2025-2026/Helena-Chan.jpeg" },
        { name: "Jocelyn", role: "Outreach Associate", image: "/meet-the-team-2025-2026/Jocelyn.png" },
        { name: "Khor Wan Yan", role: "Outreach Associate", image: "/meet-the-team-2025-2026/Khor-Wan-Yan.jpeg" },
        { name: "Nur Farah Hidayah", role: "Outreach Associate", image: "/meet-the-team-2025-2026/Nur-Farah-Hidayah.jpeg" },
        { name: "Zoe Yee", role: "Outreach Associate", image: "/meet-the-team-2025-2026/Zoe Yee.png" },
    ],
    "Tech": [
        { name: "Aiden", role: "Tech Associate", image: "/meet-the-team-2025-2026/Aiden.png" },
        { name: "Amzar", role: "Tech Associate", image: "/meet-the-team-2025-2026/Amzar.png" },
        { name: "Sharifah", role: "Tech Associate", image: "/meet-the-team-2025-2026/Sharifah.png" },
        { name: "Shaun", role: "Tech Associate", image: "/meet-the-team-2025-2026/Shaun.png" },
    ],
    "Content": [
        { name: "Alma", role: "Content Associate", image: "/meet-the-team-2025-2026/Alma.png" },
        { name: "Jun Qi Liew", role: "Content Associate", image: "/meet-the-team-2025-2026/Jun-Qi-Liew.jpeg" },
        { name: "Lillian", role: "Content Associate", image: "/meet-the-team-2025-2026/Lillian.png" },
        { name: "Pei Jhen", role: "Content Associate", image: "/meet-the-team-2025-2026/Pei Jhen.png" },
        { name: "Swetha Jayaprasad", role: "Content Associate", image: "/meet-the-team-2025-2026/Swetha-Jayaprasad-Rao.jpeg" },
    ],
    "Product": [
        { name: "Liang Yin Xian", role: "Product Associate", image: "/meet-the-team-2025-2026/Liang-Yin-Xian.jpeg" },
        { name: "Kai Qian", role: "Product Associate", image: "/meet-the-team-2025-2026/Kai Qian.png" },
        { name: "Chan Zhen Yen", role: "Product Associate", image: "/meet-the-team-2025-2026/Chan-Zhen_Yen.jpeg" },
        { name: "Nana", role: "Product Associate", image: "/meet-the-team-2025-2026/Nana.png" },
    ]
};

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
                    <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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

const teamMembers: TeamMember[] = [
    ...founders,
    ...directors,
    ...associates["Strategic Projects"],
    ...associates["Impact"],
    ...associates["Marketing"],
    ...associates["Outreach"],
    ...associates["Tech"],
    ...associates["Content"],
    ...associates["Product"],
];

const MeetTheTeam = () => {
    return (
        <MeetTheTeamTemplate title="Meet the Team (2025-2026)">
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

export default MeetTheTeam;
