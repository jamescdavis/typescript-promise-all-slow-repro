# TypeScript perfomance issues with Promise.all()

There seems to be a serious regression in TypeScript 3.1+ when using `Promise.all()` in combination with array extensions involving mapped types and conditional types. This attempts to reproduce the issue for further investigation.

### typescript@3.0.3

<details>
<summary><code>npx tsc --extendedDiagnostics</code> (1.81s)</summary>

```sh
$ npx tsc --extendedDiagnostics
Files:             27
Lines:          24465
Nodes:         109782
Identifiers:    37091
Symbols:        38574
Types:          12042
Memory used:   91997K
I/O Read time:  0.00s
Parse time:     0.27s
Program time:   0.28s
Bind time:      0.17s
Check time:     1.36s
Total time:     1.81s
```
</details>

### typescript@3.1.6

<details>
<summary><code>npx tsc --extendedDiagnostics</code> (27.87s)</summary>

```sh
$ npx tsc --extendedDiagnostics
Files:              27
Lines:           24971
Nodes:          108601
Identifiers:     37234
Symbols:        141149
Types:           30147
Memory used:   119383K
I/O Read time:   0.00s
Parse time:      0.28s
Program time:    0.30s
Bind time:       0.17s
Check time:     27.39s
Total time:     27.87s

```
</details>

### typescript@3.2.4

<details>
<summary><code>npx tsc --extendedDiagnostics</code> (34.34s)</summary>

```sh
$ npx tsc --extendedDiagnostics
Files:              27
Lines:           25250
Nodes:          109593
Identifiers:     38187
Symbols:        141182
Types:           32318
Memory used:   149070K
I/O Read time:   0.01s
Parse time:      0.33s
Program time:    0.35s
Bind time:       0.18s
Check time:     33.81s
Total time:     34.34s
```
</details>

### typescript@3.3.3

<details>
<summary><code>npx tsc --extendedDiagnostics</code> (33.40s)</summary>

```sh
$ npx tsc --extendedDiagnostics
Files:              27
Lines:           25314
Nodes:          109787
Identifiers:     38273
Symbols:        141243
Types:           39011
Memory used:   133458K
I/O Read time:   0.01s
Parse time:      0.30s
Program time:    0.32s
Bind time:       0.18s
Check time:     32.90s
Total time:     33.40s
```
</details>

### typescript@next (3.4.0-dev.20190215)

<details>
<summary><code>npx tsc --extendedDiagnostics</code> (1.27s)</summary>

```sh
$ npx tsc --extendedDiagnostics
Files:             27
Lines:          25766
Nodes:         110419
Identifiers:    38327
Symbols:        29724
Types:          10173
Memory used:   75107K
I/O Read time:  0.01s
Parse time:     0.32s
Program time:   0.34s
Bind time:      0.17s
Check time:     0.76s
Total time:     1.27s
```
</details>
