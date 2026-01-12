export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-red-500 text-4xl mb-4">
        Does red color work?
      </h1>
      
      <h2 className="font-poppins text-4xl mb-4">
        Does font-poppins work?
      </h2>
      
      <h3 style={{ fontFamily: 'var(--font-poppins)' }} className="text-4xl mb-4">
        Does inline style work?
      </h3>
    </div>
  );
}