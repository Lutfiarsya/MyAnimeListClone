"use client"
const Pagination = ({ page, totalPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNext = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrev = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }


    return(
        <div className="flex justify-center items-center px-4 py-4 gap-4 text-white text-xl">
            {page <= 1 ? null : 
            <button className="transition all hover:text-color-secondary" onClick={handlePrev}>Prev</button>
            }
            <p>{page} of {totalPage} </p>
            
            {page >= totalPage ? null : 
            <button className="transition all hover:text-color-secondary" onClick={handleNext}>Next</button>
            }
        </div>
    )
}

export default Pagination