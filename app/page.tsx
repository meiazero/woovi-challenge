import { OptionFields } from "@/components/ui/OptionFields";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-extrabold text-center">João, como você quer pagar?</h1>
      <OptionFields />
    </div>
  );
}
