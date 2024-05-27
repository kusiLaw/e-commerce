import Link from "next/link"

const FooterList = ({ header, list =[] }: { header: string, list: Array<string[]> }) => {
 return(
    <div className="">
        <h2 className="font-semibold text-md md:text-xl capitalize py-5 ">{header}</h2>
        <div className="flex flex-col text-normal md:text-lg font-light gap-3">
            {
            list.map((item) =>(
                <Link key ={item[0] } href={item[1]?  item[1] : '#'} className="capitalize hover:text-context_color">
                    {item[0] && item[0] }
                </Link>
            ))
            }
        </div>

    </div>
 )
}

export default FooterList
