# STEP 1
from PyPDF2 import PdfReader

reader = PdfReader("history.pdf")

pdf_text = []

page = reader.pages[25]

print(page.extract_text(), ' is page')

# for page in reader.pages:
#     text = page.extract_text()    
#     text_lower = text.lower()
#     # print(text_lower, ' is text')
#     pdf_text.append(text.strip('\n'))

# print(pdf_text[0])  

# for i in pdf_text:
#     print(i)
#     with open('nums.txt', 'a') as f:
#           f.write(i)