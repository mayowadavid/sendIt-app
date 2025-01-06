import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Toast } from "./function";
const useDataQuery = (queryName) => {
    const [result, setResult] = useState({});
    
    const [ runQuery ] = useLazyQuery(queryName, {
      onCompleted: (data) => {
        if (data) {
          setResult(data);
          Toast.fire({
            icon: "success",
            title: "Successfull",
          });
        }
      },
      onError: (error) => {
        error && Toast.fire({
            icon: 'error',
            title: `${error.message}`
        })
      },
    });

    return {runQuery, ...result};
    
}

const useCreateMutation = (mutationName) => {

  const [result, setResult] = useState({});

  const [create] = useMutation(mutationName, {
    onCompleted: (data) => {
      if (data) {
        setResult(data);
        Toast.fire({
          icon: "success",
          title: "Successfull",
        });
      }
    },
    onError: (error)=> {
      const message = (`${error}`).split('\n')[0].trim();
      error && Toast.fire({
        icon: 'error',
        title: `${message}`
    })
    }
  })

  return {create, ...result}
}

  export {useDataQuery, useCreateMutation};