import json

raw = """1) What is the proper conjugation for the je form of avoir in the subjonctif?

a. ais

b. ait

c. aie

d. avoir

correct - c

2) What is the proper conjugation for the tu form of être in the subjonctif?

a. ait

b. sois

c. être

b. etois

correct - b

3) What is the proper conjugation for the il/elle/on form of aller in the subjonctif?

a. aille

b. allais

c. aller

d. ait

correct - a

4) What is the proper conjugation for the vous form of faire in the subjonctif?

a. faire

b. fasse

c. fairez

d. fassiez

correct - d

5) What is the proper conjugation for the nous form of savoir in the subjonctif?

a. savions

b. savoir

c. savons

d. sachions

correct - d

6) What is the proper conjugation for the ils/elles form of pouvoir in the subjonctif?

a. pouvoir

b. pouvent

c. puissent

d. pouvisent

correct - c

7) Is the subjonctif a tense?

a. Yes

b. No

correct - b

8) Does a statement in the subjonctif need to be prefaced with an expression such as “il faut que”?

a. Yes

b. No

correct - a

9) What is the subjonctif used to express?

a. Uncertainty

b. Needing to do something

c. All of the above

d. Neither

correct - c

10) What form of a present tense verb has its ending changed to form the verb in the subjonctif?

a. Ils/elles

b. Vous

c. The infinitive

d. Il/elle

correct - a"""

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
