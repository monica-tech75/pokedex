export default function NavBar ({handleNextClick, handlePreviusClick}){
  return (
    <>

<button onClick={handleNextClick}>Next</button>
<button onClick={handlePreviusClick}>Previus</button>
    </>



  );
}