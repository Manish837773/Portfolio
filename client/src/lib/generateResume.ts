import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function generateResume() {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(66, 153, 225);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('SAI MANISH S', 105, 18, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Microsoft Certified Data Engineer', 105, 28, { align: 'center' });
  
  // Contact Info
  doc.setFontSize(9);
  doc.text('Email: saimanish@example.com | LinkedIn: linkedin.com/in/sai-manish-s/', 105, 35, { align: 'center' });
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  let yPos = 50;
  
  // Summary
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Professional Summary', 15, yPos);
  yPos += 8;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const summary = 'Microsoft Certified Data Engineer with 4 years of experience in ETL development, data platform modernization, and workflow automation. Skilled in Azure, Databricks, Microsoft Fabric, Spark, and SQL with a proven track record of optimizing performance and delivering scalable solutions for clients like BAT and the Income Tax Department of India.';
  const splitSummary = doc.splitTextToSize(summary, 180);
  doc.text(splitSummary, 15, yPos);
  yPos += splitSummary.length * 5 + 8;
  
  // Work Experience
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Work Experience', 15, yPos);
  yPos += 8;
  
  // ITC Infotech
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Associate Consultant | D&A Team', 15, yPos);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('ITC Infotech | March 2024 - Present', 15, yPos + 5);
  yPos += 12;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const itcProjects = [
    '• Led Snowflake to Microsoft Fabric migration, migrating 900+ SQL tables/views',
    '• Designed ETL pipeline for Supply Analytics using Microsoft Fabric Data Factory',
    '• Migrated 10+ live ETL pipelines with 30% performance improvement',
    '• Achieved zero-downtime migration for live machine learning pipelines'
  ];
  itcProjects.forEach(project => {
    doc.text(project, 20, yPos);
    yPos += 5;
  });
  yPos += 5;
  
  // Infosys
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Senior Systems Engineer | Income Tax', 15, yPos);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('Infosys Ltd | October 2021 - March 2024', 15, yPos + 5);
  yPos += 12;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const infosysProjects = [
    '• Developed and maintained Income Tax Returns (ITRs) processing components',
    '• Managed processing of 7 crore emails and SMS notifications',
    '• Increased SONAR code coverage from 60% to 80%',
    '• Created real-time monitoring dashboard in Dynatrace'
  ];
  infosysProjects.forEach(project => {
    doc.text(project, 20, yPos);
    yPos += 5;
  });
  yPos += 8;
  
  // Skills
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Technical Skills', 15, yPos);
  yPos += 8;
  
  const skills = [
    ['Big Data & Warehousing', 'Microsoft Fabric, Snowflake, Azure Databricks, Apache Spark, PySpark, Delta Lake'],
    ['Programming', 'Python, Java, TypeScript, T-SQL, FastAPI, Streamlit'],
    ['Cloud & DevOps', 'Microsoft Azure, Azure Data Factory, CI/CD, Docker, Git, Dynatrace'],
    ['Machine Learning', 'RAG Applications, ChromaDB, Vector Embeddings, Feature Engineering']
  ];
  
  autoTable(doc, {
    startY: yPos,
    head: [['Category', 'Technologies']],
    body: skills,
    theme: 'grid',
    headStyles: { fillColor: [66, 153, 225] },
    margin: { left: 15, right: 15 },
    styles: { fontSize: 9 }
  });
  
  yPos = (doc as any).lastAutoTable.finalY + 10;
  
  // Certifications
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Certifications', 15, yPos);
  yPos += 8;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const certs = [
    '• Microsoft Certified: Fabric Analytics Engineer Associate (2024)',
    '• Implement Real time Intelligence in Microsoft Fabric (2024)',
    '• Gen AI for everyone - Coursera (2024)',
    '• Python for Data Science and AI - Coursera (2024)'
  ];
  certs.forEach(cert => {
    doc.text(cert, 20, yPos);
    yPos += 5;
  });
  yPos += 5;
  
  // Education
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Education', 15, yPos);
  yPos += 8;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Bachelor of Engineering in Electronics and Communication', 15, yPos);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Amrita Vishwavidhyapeetam, Bangalore | May 2021 | GPA: 8.8/10', 15, yPos + 5);
  
  // Save
  doc.save('Sai_Manish_S_Resume.pdf');
}
