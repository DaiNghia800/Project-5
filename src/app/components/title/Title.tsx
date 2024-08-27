export default function Title(props : {text : string, className?: string }) {

    const {text = '', className = ''} = props;
    
    return(
        <>
          <div className={"text-[24px] font-bold text-[#EFEEE0] mb-[20px] " + className}>
            {text}
          </div>
        </>
    )
}