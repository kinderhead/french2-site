import json

raw = """1) Je faire  
a.  Je frait
b.  Je frias
c.  Je faisais
d.  Je fains
correct - c
2) Elles faire
a.  Elles faire
b.  Elle faisent
c.  Elle iassion
d.  Elles faisaient
correct - d
3) Tu étudier
a.  Tu étudiais
b. Tu étudiens
c.  Vous étudiez
d.  Tu étudias
correct - a
4) Vous aller
a.  Vous allies
b.  Vous alliez
c.  Vous allions
d.  Vous aller  
correct - b
5) Nous être
a.  Nous êtren
b.  Nous êtrions
c.  Nous êtions
d.  Nous être
correct - c
6) Il perler
a.  Il parlait
b.  Il parliet
c.  Il parliez
d.  Il parit
correct - a
7) On finir
a.  On finiez
b.  On finissont
c.  On finissat
d.  On finissait
correct - d"""

questions = raw.split(")")
data = [];
for i in questions:
    if len(i) < 5: continue
    lines = i.split("\n")
    name = lines[0].strip()
    answers = []
    correct = 0;
    for e in lines[1:]:
        if "correct" in e.lower():
            check = e.split("-")[1].strip()
            if "a" in check: correct = 0
            if "b" in check: correct = 1
            if "c" in check: correct = 2
            if "d" in check: correct = 3
            break
        if e.strip() == "" or len(answers) >= 4:
            continue
        answers.append(e.replace("a.", "").replace("b.", "").replace("c.", "").replace("d.", "").strip())
    data.append({"question": name, "answers": answers, "correct": correct})

with open("test.json", "w") as f:
    json.dump(data, f)
