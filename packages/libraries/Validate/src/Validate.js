'use client'

import React, { useState, useEffect } from "react";

// https://github.com/OpenReferralUK/human-services/blob/master/ImplementationTools/ServiceDirectoryValidator/Pages/Index.cshtml
// https://validator.openreferraluk.org/Index?handler=Validate&baseUrl=https%3A%2F%2Fapi.familyinfo.buckinghamshire.gov.uk%2Fapi%2Fv1&id=a0e0a010-b402-42b1-99fd-922fe2672d4e

export const Validate = () => {

	const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://validator.openreferraluk.org/Index?handler=Validate&baseUrl=https%3A%2F%2Fapi.familyinfo.buckinghamshire.gov.uk%2Fapi%2Fv1&id=a0e0a010-b402-42b1-99fd-922fe2672d4e", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return(
	<main>
		wat
	   {joke && <p>{joke}</p>}
	</main>)
}
