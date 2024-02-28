import Skeleton, { SkeletonProps, SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({ ...props }: SkeletonProps) {
	return (
		<SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
			<Skeleton containerClassName="flex-1" {...props} />
		</SkeletonTheme>
	);
}
