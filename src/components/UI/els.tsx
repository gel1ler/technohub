export const DotHr = ({ gray }: { gray?: boolean }) => {
    return (
        <div className="flex items-center w-full">
            <span className={`w-2 h-2 rounded-full ${gray ? 'bg-thgray' : 'bg-thgreen'}`}></span>
            <hr className={`flex-1 border-t ${gray ? 'border-thgray' : 'border-thgreen'}`} />
            <span className={`w-2 h-2 rounded-full ${gray ? 'bg-thgray' : 'bg-thgreen'}`}></span>
        </div>
    )
}
