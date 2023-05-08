import json

raw = """1)  Je manger

a. Je mange

b. Je mangerons

c. Je mangerai

d. Je mangere

correct - c

2) Tu faire

a. Tu fairas

b. Tu fera

c. Tu faira

d. Tu feras

correct - d

3) Nous dormir

a. Nous dormirions

b. Nous dormiron

c. Nous dormirons

d. Nous dormons

correct - c

4) Vous être

a. Vous serez

b. Vous seriez

c. Vous êtez

d. Vous êtrez

correct - a

5) Ils voyager

a. Ils voyagent

b. Ils voyageont

c. Ils voyageront

d. Ils voyagerent

correct - c

6) Je aller

a. Je irai

b. Je aurai

c. Je arai

d. Je aurai

correct - a

7) Tu travailler

a. Tu travaillas

b. Tu travailleras

c. Tu travailla

d. Tu travaillera

correct - b

8) Elle avoir

a. Elle auras

b. Elle aurai

c. Elle aura

d. Elle aure

correct - c

9) Nous acheter

a. Nous acheterons

b. Nous aucherons

c. Nous acheterions

d. Nous aucherions

correct - a

10) Je pouvoir

a. Je pourrons

b. Je pourai

c. Je pourons

d. Je pourrai

correct - d

11) Vous venir

a. Vous venez

b. Vous vienez

c. Vous viendrez

d. Vous veidez

correct - c

12) Tu danser

a. Tu dansas

b. Tu dansera

c. Tu danseras

d. Tu danse

correct - c

13) Elles compter

a. Elles comeront

b. Elles comperent

c. Elles compteront

d. Elles compterent

correct - c

14) Tu appeler

a. tu appeles

b. tu appelas

c. tu appeleras

d. tu appeleres

correct - c

15) Elles decider

a. Elles decide

b. Elles decident

c. Elles decideront

d. Elles deciderent

correct - c"""

questions = raw.split(")")
data = [];
for i in questions:
    if len(i) < 5: continue
    lines = i.split("\n")
    name = lines[0].strip()
    answers = []
    correct = 0;
    for e in lines[1:]:
        if e.strip() == "" or len(answers) >= 4:
            if "correct" in e.lower():
                check = e.split("-")[1].strip()
                if "a" in check: correct = 0
                if "b" in check: correct = 1
                if "c" in check: correct = 2
                if "d" in check: correct = 3
            continue
        answers.append(e.replace("a.", "").replace("b.", "").replace("c.", "").replace("d.", "").strip())
    data.append({"question": name, "answers": answers, "correct": correct})

with open("test.json", "w") as f:
    json.dump(data, f)
