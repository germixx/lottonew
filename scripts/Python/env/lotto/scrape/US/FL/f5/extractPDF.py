# sTep 1 of extraction of PDF
## Writes each page to file
from PyPDF2 import PdfReader

reader = PdfReader("ff.pdf")

pdf_text = []

for page in reader.pages:
        text = page.extract_text()
        text_lower = text.lower()
        pdf_text.append(text.strip('\n'))

# print(pdf_text[0])  

for i in pdf_text:
    print(i)
    with open('nums.txt', 'a') as f:
          f.write(i)












