"use client";

import { useEffect, useState } from "react";
import { Customer } from "@/types/customer";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadCustomers() {
      const storedCustomers = localStorage.getItem("customers");

      if (storedCustomers) {
        setCustomers(JSON.parse(storedCustomers));
      } else {
        const response = await fetch("/customers.json");
        const data = await response.json();

        setCustomers(data);
      }

      setLoaded(true);
    }

    loadCustomers();
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers, loaded]);

  return {
    customers,
    setCustomers,
  };
}