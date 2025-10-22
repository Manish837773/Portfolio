import TechBadge from '../TechBadge';

export default function TechBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <TechBadge name="Microsoft Fabric" />
      <TechBadge name="Azure Databricks" />
      <TechBadge name="PySpark" />
      <TechBadge name="Python" />
    </div>
  );
}
