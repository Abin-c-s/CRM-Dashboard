import SearchBar from "../search/SearchBar";
import { Button } from "@/components/ui/button";

export default function CustomerHeader() {
  return (
    <div className="flex justify-between items-center mt-8">

      <SearchBar />

      <Button>

        + Add Customer

      </Button>

    </div>
  );
}