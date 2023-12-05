
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { cardData } from "./data";

const MyCard = async ({data})=> {
    const prices= cardData();

    return(
    <Card className="max-w-[400px]">
        <CardHeader className="flex gab-3">
            Hinta nyt
        </CardHeader>
        <CardBody>
            <p>{prices.toFixed(2)} snt/kWh</p>
        </CardBody>
    </Card>
    );
}
export default MyCard;