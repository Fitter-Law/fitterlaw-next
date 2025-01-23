#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

function detectTsxErrors(dir: string) {
  const program = ts.createProgram({
    rootNames: findTsxFiles(dir),
    options: {
      strict: true,
      noEmit: true,
      jsx: ts.JsxEmit.React
    }
  });

  const errors: any[] = [];

  program.getSyntacticDiagnostics().forEach(diagnostic => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file, 
        diagnostic.start || 0
      );

      errors.push({
        fileName: path.relative(dir, diagnostic.file.fileName),
        line: line + 1,
        column: character + 1,
        message: ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
        code: diagnostic.code
      });
    }
  });

  program.getSemanticDiagnostics().forEach(diagnostic => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file, 
        diagnostic.start || 0
      );

      errors.push({
        fileName: path.relative(dir, diagnostic.file.fileName),
        line: line + 1,
        column: character + 1,
        message: ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
        code: diagnostic.code
      });
    }
  });

  return errors;
}

function findTsxFiles(dir: string): string[] {
  const tsxFiles: string[] = [];

  function traverse(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (file.endsWith('.tsx')) {
        tsxFiles.push(fullPath);
      }
    });
  }

  traverse(dir);
  return tsxFiles;
}

// Run from project root
const srcDir = path.join(process.cwd(), 'src');
const errors = detectTsxErrors(srcDir);

// Output errors
console.log(JSON.stringify(errors, null, 2));