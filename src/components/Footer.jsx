export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Lexend. All rights reserved.
      </p>
    </footer>
  );
}
