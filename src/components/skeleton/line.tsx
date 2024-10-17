import Skeleton from "./skeleton"

export const LineSkeleton = ({classname = ''}) => {
  return (
    <Skeleton customClassNames={`w-full h-[0.7rem] round-sm ${classname}`} viewAs={null}/>
  )
}