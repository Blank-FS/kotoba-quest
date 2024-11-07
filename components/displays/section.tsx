import React from "react";
import { WordType, GroupType } from "@/constants";
import Category from "./category";
import { categoryMap, dataMap } from "@/constants/staticData";

interface Props {
  type: string;
  className?: string;
  access: string;
  words: WordType[];
  groups: GroupType[];
  error?: string;
}

export default function Section({
  type,
  className,
  access,
  words,
  groups,
  error,
}: Props) {
  // Turned of AWS RDS database, using static data.
  /*
  const [words, setWords] = useState<WordType[]>([]);
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [error, setError] = useState<string>("Unable to get Data");
  useEffect(() => {
    fetch(`/api/public/words?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setWords(data.arr);
        setError(data.error);
      });
    fetch(`/api/public/groups?type=${type}`)
      .then((res) => res.json())
      .then((data) => {
        setGroups(data.arr);
        setError(data.error);
      });
  }, []);*/

  if (groups)
    return (
      <div className={className}>
        {groups.map((group: GroupType) => {
          // Filter words to be of the group
          const arr = words.filter((obj) => obj.groupId === group.id);
          return (
            <Category
              key={group.id}
              type={type}
              category={group.category}
              arr={arr}
              access={access}
              groups={groups}
            />
          );
        })}
      </div>
    );

  return <div className={className}>{JSON.stringify(error)}</div>;
}
