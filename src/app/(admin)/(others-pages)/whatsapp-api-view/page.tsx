import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import WhatsAppTable from "@/components/tables/WhatsAppTable";
import Button from "@/components/ui/button/Button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js WhatsApp API Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js WhatsApp API Dashboard TailAdmin Dashboard Template",
};

export default function WhatsAppAPIPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="WhatsApp API Dashboard" />
      <div className="space-y-6">
        <ComponentCard title="Display Sample List"
          // desc={(<Button size="sm" variant="primary">
          //   Add Button
          // </Button>)}
        >
          <WhatsAppTable />
        </ComponentCard>
      </div>
    </div>
  );
}
