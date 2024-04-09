import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Dog, Minus, PiggyBank, Plus, UserPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type Props = {
  playerId: number;
  playerName: "string";
};

const AddFinesDrawer = ({ playerId, playerName }: Props) => {
  const [fine, setFine] = useState(5);

  const onClick = (adjustment: number) => {
    setFine(fine + adjustment);
  };
  return (
    <Drawer>
      <DrawerTrigger className="p-2">
        <Button>
          <PiggyBank className="mr-2 h-4 w-4" />
          Add Fine
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
        <Card className="w-full max-w-sm mx-auto">
          <form method="POST">
            <CardHeader>
              <CardTitle className="text-2xl w-full">
                Add a dawg
                <Dog className="ml-2 inline-block" />
              </CardTitle>
              <CardDescription>
                and then bleed their pockets dry.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  name="name"
                  value={playerName}
                  disabled
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch name="isPeanut" defaultChecked={false} />
                <Label htmlFor="isPeanut">Peanut Award</Label>
              </div>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(-1)}
                    disabled={fine <= 0}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                      ${fine}
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(1)}
                    disabled={fine >= 10}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                  <Input
                    type="hidden"
                    value={fine}
                    id="fineAmount"
                    name="fineAmount"
                  />
                  <Input
                    type="hidden"
                    value={playerId}
                    id="playerId"
                    name="playerId"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                <PiggyBank className="mr-2 h-4 w-4" />
                Fine the cunt.
              </Button>
            </CardFooter>
          </form>
        </Card>
      </DrawerContent>
    </Drawer>
  );
};

export default AddFinesDrawer;
