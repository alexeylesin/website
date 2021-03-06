import CheckIcon from "public/icons/CheckIcon.svg";
import { FC } from "react";

export type TimelineItemProps = {
  headline: string;
  description?: string;
};

export const TimelineItem: FC<TimelineItemProps> = ({ headline, description }) => {
  return (
      <>
        <li>
          <CheckIcon />
          <h4 className="h6" dangerouslySetInnerHTML={{__html: headline}} />
          {description ? <p dangerouslySetInnerHTML={{__html: description}} /> : null}
        </li>
        <style jsx>{`
          li {
            display: grid;
            align-items: center;
            grid-template-columns: 3.6rem 1fr;
            grid-template-rows: 2.8rem 1fr;
            grid-template-areas:
            ' . . '
            ' . description';
            margin-bottom: 1.6rem;
            grid-row-gap: 0.4rem;

            :global(svg) {
              margin: 0 12px 0 8px;
              color: var(--color-pro);
            }
          }

          p {
            grid-area: description;
          }
        `}</style>
      </>
  );
};
