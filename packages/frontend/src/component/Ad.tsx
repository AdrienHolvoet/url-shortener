import { Image, Skeleton } from "@mantine/core";
import { useGetAdQuery } from "../queries/ads";
import { useHover } from "@mantine/hooks";
import { Link } from "react-router";

type Props = {
  width: number;
  height: number;
};

const Ad = ({ width, height }: Props) => {
  const { hovered, ref } = useHover();
  const { data: ad, isPending, isError } = useGetAdQuery(width, height, !hovered);

  if (isPending || isError) return <Skeleton height={height} width={width} />;

  return (
    <Link to={ad.data.link} target="_blank">
      <Image
        ref={ref}
        src={ad.data.imageUrl}
        alt={ad.data.id}
        width={ad.data.width}
        height={ad.data.height}
      />
    </Link>
  );
};

export default Ad;
