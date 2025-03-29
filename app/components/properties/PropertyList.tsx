'use client'

import PropertyListItem, { PropertyProps } from "./PropertyListItem"
import { useEffect, useState } from "react"
import apiService from "@/app/services/apiService"

const PropertyList = ({ }) => {
    const [properties, setProperties] = useState<PropertyProps[]>([]);

    const getProperties = async () => {
        const url = '/api/properties/';

        const tmpProperties = await apiService.get(url);
        setProperties(tmpProperties.data);
    }

    useEffect(() => {
        getProperties();
    }, []);

    return properties.map((property) => (
        <PropertyListItem
            key={property.id}
            property={property}
        />
    ))
}

export default PropertyList