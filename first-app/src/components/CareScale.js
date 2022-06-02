function CareScale(props){
    
    const {scaleValue, careType} = props
    const range = [1,2,3]

    const scaleType = careType === 'water' ? '💧' : '😎'
   

    return (
        <div>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? (
                    <span key = {rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
