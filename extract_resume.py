from pypdf import PdfReader

reader = PdfReader("d:/Port/David_Portfolio/David Kemboi Resume .pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

import sys

try:
    print(text.encode(sys.stdout.encoding, errors='replace').decode(sys.stdout.encoding))
except Exception as e:
    print(text.encode('utf-8', errors='ignore').decode('utf-8'))
