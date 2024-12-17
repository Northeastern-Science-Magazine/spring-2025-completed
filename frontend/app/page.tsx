"use client";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => setMessage(data))
            .catch((error) => console.error('Error fetching message:', error));
    }, []);

  return (
    <p>{ JSON.stringify(message) }</p>
  );
}
