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
    { name: "Kai Song", role: "Co-Founder", image: "/meet-the-team-2021-2022/Screenshot-2025-07-17-230036.png" },
    { name: "Kaveen", role: "Co-Founder", image: "/meet-the-team-2021-2022/Screenshot-2025-07-17-230231.png" },
    { name: "Wen Wen Teh", role: "Program Director", image: "/meet-the-team-2021-2022/Wen-Wen-300x300-1.jpg.jpeg" },
    { name: "Esther Ng", role: "Program Director", image: "/meet-the-team-2021-2022/Esther-300x300-1.jpg.jpeg" },
    { name: "Venecia Chai", role: "Operations Director", image: "/meet-the-team-2021-2022/Venecia-Chai-300x300-1.jpg.jpeg" },
    { name: "Winfrey Kong", role: "Master Marketing Wizard", image: "/meet-the-team-2021-2022/Winfrey-300x300-1.jpg.jpeg" },
    { name: "Samantha Lee", role: "Master Marketing Wizard", image: "/meet-the-team-2021-2022/Samantha-300x300-1.jpg.jpeg" },
    { name: "Pei Xien Yeoh", role: "Student Welfare Director", image: "/meet-the-team-2021-2022/PeiXien-300x300-1.jpg.jpeg" },
    { name: "Jia Wie Tam", role: "Student Welfare Director", image: "/meet-the-team-2021-2022/Jia-Wie-300x300-1.jpg.jpeg" },
    { name: "Rachel Lee", role: "Partnership Lead", image: "/meet-the-team-2021-2022/rachel-Lee-300x300-1.jpg.jpeg" },
    { name: "Wai Kin Leo", role: "Partnership Lead", image: "/meet-the-team-2021-2022/Leo-Wai-Kin-300x300-1.jpeg" },
    { name: "Nurul Qarirah", role: "Partnership Lead", image: "/meet-the-team-2021-2022/Nurul-Qarirah-300x300-1.jpg.jpeg" },
    { name: "Hilda Paviter Kaur", role: "Training Lead", image: "/meet-the-team-2021-2022/Hilda-300x300-1.jpg.jpeg" },
    { name: "Yi Fen Kong", role: "Training Lead", image: "/meet-the-team-2021-2022/Yi-Fen-300x298-1.jpeg" },
    { name: "Jie Yi Ng", role: "Secretary", image: "/meet-the-team-2021-2022/Jie-Yi-300x298-1.jpg.jpeg" },
    { name: "Jay Yen Lim", role: "Tech & Finance Lead", image: "/meet-the-team-2021-2022/Jay-251x300-2.jpg.jpeg" },
    { name: "Ventus Tan", role: "Program Associate", image: "/meet-the-team-2021-2022/Tan-Wei-Yang-Ventus-300x300-1.jpg.jpeg" },
    { name: "Edward Soon", role: "Program Associate", image: "/meet-the-team-2021-2022/Edward-Soon-Rong-Wei-1-300x300-1.jpg.jpeg" },
    { name: "Siew Jong Chew", role: "Program Associate", image: "/meet-the-team-2021-2022/siew-jong-300x300-1.jpg.jpeg" },
    { name: "Clara Tan", role: "Student Welfare Associate", image: "/meet-the-team-2021-2022/clara-tan-300x287-1.jpeg" },
    { name: "Qi Zhong (Christopher) Leong", role: "Student Welfare Associate", image: "/meet-the-team-2021-2022/Chris-Leong-300x300-1.jpg.jpeg" },
    { name: "Arif Jalal", role: "Student Welfare Associate", image: "/meet-the-team-2021-2022/Arif-Jalal-300x300-1.jpg.jpeg" },
    { name: "Ying Hui Chew", role: "Student Welfare Associate", image: "/meet-the-team-2021-2022/ying-hui-300x300-1.jpg.jpeg" },
    { name: "Pei Xuen Chin", role: "Student Welfare Associate", image: "/meet-the-team-2021-2022/Pei-Xuen-300x300-1.jpg.jpeg" },
    { name: "Sara Tan", role: "Operations Associate", image: "/meet-the-team-2021-2022/Sara-Tan-300x300-1.jpg.jpeg" },
    { name: "Yong Yong Saw", role: "Operations Associate", image: "/meet-the-team-2021-2022/Saw-Yong-Yong-300x300-1.jpg.jpeg" },
    { name: "Enson Ng", role: "Operations Associate", image: "/meet-the-team-2021-2022/Enson-Ng-300x300-1.jpg.jpeg" },
    { name: "Kai Jun Eer", role: "Operations Associate", image: "/meet-the-team-2021-2022/Kai-Jun-300x300-1.jpg.jpeg" },
    { name: "Esther Chua", role: "Operations Associate", image: "/meet-the-team-2021-2022/Esther-Chua-300x300-1.jpg.jpeg" },
    { name: "Zhi Jian (Chris) Chen", role: "Operations Associate", image: "/meet-the-team-2021-2022/Chris-300x300-1.jpg.jpeg" },
    { name: "Nicole Loh", role: "Marketing Wizard", image: "/meet-the-team-2021-2022/Nicole-1-300x300-1.jpg.jpeg" },
    { name: "Clover Chiew", role: "Marketing Wizard", image: "/meet-the-team-2021-2022/Clover-Chiew-300x300-1.jpg.jpeg" },
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

const MeetTheTeam2021 = () => {
    return (
        <MeetTheTeamTemplate title="Meet the Team (2021-2022)">
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

export default MeetTheTeam2021;
