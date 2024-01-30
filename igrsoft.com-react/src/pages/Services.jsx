import { Service } from "components/Service/Service";
import css from "./Services.module.css"

export const Services = () => {
    return (
        <Service classSection={css.services} classItem={css.services_item} classOverlay={css.overlay} />
    )
}