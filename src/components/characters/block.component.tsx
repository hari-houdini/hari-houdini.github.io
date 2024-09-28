import { hasItemsInList } from "../../common.util";
import "./card.css";

type CharacterBadgesProps = {
    loadingState: boolean;
    title: string;
    badges: BadgeProps[] | null;
}

export const CharacterBlock = ({
    loadingState,
    title,
    badges
}: CharacterBadgesProps) => {
    return (
        <div className="block">
            {loadingState ? (<>Loading...</>) : (
                <div className="attribute">
                    <div className="attr-key">{title}</div>
                    <div className="attr-value">{
                        hasItemsInList(badges) ? 
                            badges!.map((badge: BadgeProps, index: number) => {
                                const _badge = badge?.name ?? badge?.title;
                                return <div key={index} className="badge">{_badge}</div>
                            }) 
                            : 
                            <div className="badge">N/A</div>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}