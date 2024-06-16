export default function NavBar ({handleNextClick, handlePreviusClick}){
  return (
    <>
<button onClick={handlePreviusClick}>Previus</button>
<button onClick={handleNextClick}>Next</button>

    </>



  );
}